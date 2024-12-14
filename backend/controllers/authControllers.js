const adminModel = require("../models/adminModel");
const sellerCustomerModel = require("../models/chat/sellerCustomerModel");
const sellerModel = require("../models/sellerModel");
const { responseReturn } = require("../utiles/response");
const { createToken } = require("../utiles/tokenCreate");
const bcrpty = require("bcrypt");
const bcrypt = require("bcrypt");
class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        const match = await bcrpty.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "Login success" });
        } else {
          responseReturn(res, 404, { error: "Password wrong" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  getUser = async (req, res) => {
    const { id, role } = req;

    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        const seller = await sellerModel.findById(id);
        responseReturn(res, 200, { userInfo: seller });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  // seller_register = async (req, res) => {
  //   const { email, name, password } = req.body;
  //   const isProduction = process.env.NODE_ENV === "production";

  //   try {
  //     // Check if email already exists
  //     const getUser = await sellerModel.findOne({ email });
  //     if (getUser) {
  //       return responseReturn(res, 404, { error: "Email already exists" });
  //     }

  //     // Hash password
  //     const hashedPassword = await bcrypt.hash(password, 10);

  //     // Create seller
  //     const seller = await sellerModel.create({
  //       name,
  //       email,
  //       password: hashedPassword,
  //       method: "manually",
  //       shopInfo: {}, // Add default shop information if necessary
  //     });

  //     // Create related seller-customer entry
  //     await sellerCustomerModel.create({ myId: seller.id });

  //     // Generate token
  //     const token = createToken({ id: seller.id, role: seller.role });
  //     res.cookie("accessToken", token, {
  //       expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === "production",
  //       sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  //     });
  //     // Return success response
  //     return responseReturn(res, 201, { token, message: "Register success" });
  //   } catch (error) {
  //     console.error("Registration Error:", error); // Log full error
  //     return responseReturn(res, 500, { error: "Internal server error" });
  //   }
  // };

  seller_register = async (req, res) => {
    const { email, name, password } = req.body;
    try {
      const getUser = await sellerModel.findOne({ email });
      if (getUser) {
        responseReturn(res, 404, { error: "Email alrady exit" });
      } else {
        const seller = await sellerModel.create({
          name,
          email,
          password: await bcrpty.hash(password, 10),
          method: "menualy",
          shopInfo: {},
        });
        await sellerCustomerModel.create({
          myId: seller.id,
        });
        const token = await createToken({ id: seller.id, role: seller.role });
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        responseReturn(res, 201, { token, message: "register success" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };
  seller_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const seller = await sellerModel.findOne({ email }).select("+password");
      if (seller) {
        const match = await bcrpty.compare(password, seller.password);
        if (match) {
          const token = await createToken({
            id: seller.id,
            role: seller.role,
          });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "Login success" });
        } else {
          responseReturn(res, 404, { error: "Password wrong" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}
module.exports = new authControllers();
