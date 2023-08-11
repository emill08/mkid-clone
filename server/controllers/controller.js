const { User, Category, Image, Product } = require("../models/index");
const { comparePassword, signToken } = require("../helpers/helper");
const { sequelize } = require("../models");

class Controller {
  static async adminRegister(req, res, next) {
    try {
      const { email, password, address, phoneNumber } = req.body;
      const role = "Admin";
      const createAdmin = await User.create({
        email,
        password,
        address,
        phoneNumber,
        role,
      });
      res.status(201).json({ id: createAdmin.id, email: createAdmin.email });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async custRegister(req, res, next) {
    try {
      const { email, password, address, phoneNumber } = req.body;
      const role = "Customer";
      const createCustomer = await User.create({
        email,
        password,
        address,
        phoneNumber,
        role,
      });
      res
        .status(201)
        .json({ id: createCustomer.id, email: createCustomer.email });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw { name: "emptyEmail" };
      }

      if (!password) {
        throw { name: "emptyPassword" };
      }

      const findUser = await User.findOne({ where: { email } });

      if (!findUser) {
        throw { name: "Invalid email/password" };
      }
      const checkPassword = comparePassword(password, findUser.password);

      if (!checkPassword) {
        throw { name: "Invalid email/password" };
      }

      const payload = { id: findUser.id };
      const access_token = signToken(payload);
      res.status(200).json({ access_token });
    } catch (err) {
      console.log("ini errornya", err);
      next(err);
    }
  }
  static async fetchCategories(req, res, next) {
    try {
      const data = await Category.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async fetchProducts(req, res, next) {
    try {
      const data = await Product.findAll({
        include: [
          { model: User, attributes: ["email", "role"] },
          { model: Category, attributes: ["name"] },
          { model: Image, attributes: ["imageUrl"] },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getOneProduct(req, res, next) {
    try {
      const productId = req.params.id;
      console.log(productId, "ini product id");
      const data = await Product.findByPk(productId, {
        include: [
          { model: User, attributes: ["email", "role"] },
          { model: Category, attributes: ["name"] },
          { model: Image, attributes: ["imageUrl"] },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async addProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let { CategoryId, name, price, description, mainImage, images } =
        req.body;
      // return
      const UserId = req.user.id;
      if (!CategoryId) {
        throw {
          name: "SequelizeValidationError",
          errors: [{ message: "Category cannot be empty" }],
        };
      }
      if (!images.length) {
        throw {
          name: "SequelizeValidationError",
          errors: [{ message: "Please add another image" }],
        };
      }
      let created = await Product.create(
        { CategoryId, name, price, description, mainImage, UserId: UserId },
        { transaction: t }
      );
      images = images.map((el) => {
        return {
          ProductId: created.id,
          imageUrl: el,
        };
      });
      console.log(images, "ini images");
      // return
      await Image.bulkCreate(images, { transaction: t });
      await t.commit();
      res
        .status(201)
        .json(created);
    } catch (err) {
      await t.rollback();
      console.log(err);
      next(err);
    }
  }
  static async editProduct(req, res, next) {
    try {
      const { id } = req.params;
      let { CategoryId, name, price, description } = req.body;

      await Product.update(
        { CategoryId, name, price, description },
        { where: { id } }
      );
      res.status(201).json({ message: `Product has been updated` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      await Image.destroy({ where: { ProductId: id } });
      await Product.destroy({ where: { id } });
      res.status(201).json({ message: `Product has been deleted` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async addCategory(req, res, next) {
    try {
      const { name } = req.body;
      const createCategory = await Category.create({ name });
      res.status(201).json({ createCategory });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      await Category.destroy({ where: { id } });
      res.status(201).json({ message: `Category has been deleted` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async editCategory(req, res, next) {
    try {
      const { id } = req.params;
      let { name } = req.body;

      await Category.update(
        { name },
        { where: { id } }
      );
      res.status(201).json({ message: `Category has been updated` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async getOneCategory(req, res, next) {
    try {
      const categoryId = req.params.id;
      console.log(categoryId, "ini product id");
      const data = await Category.findByPk(categoryId);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
