import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// Fetch categories
export const get_category = createAsyncThunk(
  "product/get_category",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/home/get-categorys");

      return fulfillWithValue(data);
    } catch (error) {
      console.error("Error fetching categories:", error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch products
export const get_products = createAsyncThunk(
  "product/get_products",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/home/get-products");

      return fulfillWithValue(data);
    } catch (error) {
      console.error("Error fetching products:", error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
export const price_range_product = createAsyncThunk(
  "product/price_range_product",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/price-range-latest-product");
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const query_products = createAsyncThunk(
  "product/query_products",
  async (query, { fulfillWithValue, rejectWithValue }) => {
    try {
      // Dynamically build query string by removing invalid parameters
      const params = new URLSearchParams();

      if (query.category) params.append("category", query.category);
      if (query.rating) params.append("rating", query.rating);
      if (query.low !== undefined) params.append("lowPrice", query.low);
      if (query.high !== undefined) params.append("highPrice", query.high);
      if (query.sortPrice) params.append("sortPrice", query.sortPrice);
      if (query.pageNumber) params.append("pageNumber", query.pageNumber);
      if (query.searchValue) params.append("searchValue", query.searchValue);

      const queryString = params.toString();

      const { data } = await api.get(`/home/query-products?${queryString}`);
      return fulfillWithValue(data);
    } catch (error) {
      console.error("Error fetching queried products:", error.response);
      return rejectWithValue(
        error.response?.data || "Failed to query products."
      );
    }
  }
);

export const homeReducer = createSlice({
  name: "home",
  initialState: {
    categorys: [],
    products: [],
    latest_product: null,
    topRated_product: null,
    discount_product: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    priceRange: {
      low: 0,
      high: 100,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle get_category
    builder
      .addCase(get_category.pending, (state) => {
        state.status = "loading";
      })
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.categorys = payload.categorys;
      })
      .addCase(get_category.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload || "Failed to fetch categories.";
      })
      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload.products;
        state.latest_product = payload.latest_product;
        state.topRated_product = payload.topRated_product;
        state.discount_product = payload.discount_product;
      })
      .addCase(get_products.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload || "Failed to fetch products.";
      })
      .addCase(price_range_product.fulfilled, (state, { payload }) => {
        state.latest_product = payload.latest_product;
        state.priceRange = payload.priceRange;
      })
      .addCase(query_products.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.totalProduct = payload.totalProduct;
        state.parPage = payload.parPage;
      })
      .addCase(query_products.pending, (state) => {
        state.status = "loading";
      })
      .addCase(query_products.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload || "Failed to query products.";
      });
  },
});

export default homeReducer.reducer;
