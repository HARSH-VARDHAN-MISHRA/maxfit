const productsSchema = require('../models/product.model');
const categorySchema = require('../models/category.model');
const TapcategorySchema = require('../models/tapCategory.model');
const TapProductsSchema = require('../models/tapProduct.model');
const mediaCenterSchema = require('../models/mediaCenter.model');

// -- Category -- 
exports.createCategory = async (req, res) => {
    try {
        const { categoryName, categoryImage, description,description_second } = req.body;
        if (!categoryName || !categoryImage || !description) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            })
        }
        const newCategory = new categorySchema({
            categoryName,
            categoryImage,
            description,
            description_second
        })
        await newCategory.save();
        res.status(200).json({
            success: true,
            data: newCategory,
            message: "Category Added Successfully !!"
        })

    } catch (error) {
        console.log(error)
    }
}
exports.getAllCategory = async (req, res) => {
    try {

        const getAllCat = await categorySchema.find()

        if (getAllCat.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: getAllCat,
            msg: "Category  Found"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.deleteCategory = async(req,res)=>{
    try {
        const id = req.params.id
        const checkCate = await categorySchema.deleteOne({_id:id})
        if(!checkCate){
            return res.status(403).json({
                success: false,
                msg: "category Not Found"
            })
        }
        // checkProduct.deleteOne()
        res.status(200).json({
            success:true,
            msg:"category Deleted Succesfully !!"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedcategory = await categorySchema.findByIdAndUpdate(categoryId, updates, options);
        if (!updatedcategory) {
            return res.status(404).json({
                success: false,
                msg: "categorySchema not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Category updated successfully.",
            data: updatedcategory
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error."
        });
    }
};


// --- Products --- 
exports.createProduct = async (req, res) => {
    try {
        const { productName, prodCategory, prodImage, prodTableImage } = req.body;
        if (!productName || !prodCategory || !prodImage || !prodTableImage) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            });
        }
        const newProduct = new productsSchema({
            productName,
            prodCategory,
            prodImage,
            prodTableImage
        });
        await newProduct.save();
        res.status(200).json({
            success: true,
            data: newProduct,
            message: "Product Added Successfully !!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
exports.getAllProduct = async (req, res) => {
    try {

        const getAllPro = await productsSchema.find()

        if (getAllPro.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: getAllPro,
            msg: "Product  Found"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.deleteProducts = async(req,res)=>{
    try {
        const id = req.params.id
        const checkProduct = await productsSchema.deleteOne({_id:id})
        if(!checkProduct){
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        // checkProduct.deleteOne()
        res.status(200).json({
            success:true,
            msg:"Product Deleted Succesfully !!"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedProduct = await productsSchema.findByIdAndUpdate(productId, updates, options);
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                msg: "productSchema not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Product updated successfully.",
            data: updatedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error."
        });
    }
};

// -- Tap Categories ---- 
exports.createTapCategory = async (req, res) => {
    try {
        const { categoryName, categoryImage} = req.body;
        if (!categoryName || !categoryImage ) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            })
        }
        const newTapCategory = new TapcategorySchema({
            categoryName,
            categoryImage
        })
        await newTapCategory.save();
        res.status(200).json({
            success: true,
            data: newTapCategory,
            message: "Category Added Successfully !!"
        })

    } catch (error) {
        console.log(error)
    }
}
exports.getAllTapCategory = async (req, res) => {
    try {

        const getAllTapCat = await TapcategorySchema.find()

        if (getAllTapCat.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Category Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: getAllTapCat,
            msg: "Category  Found"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.deleteTapCategory = async(req,res)=>{
    try {
        const id = req.params.id
        const checkTapCate = await TapcategorySchema.deleteOne({_id:id})
        if(!checkTapCate){
            return res.status(403).json({
                success: false,
                msg: "category Not Found"
            })
        }
        // checkProduct.deleteOne()
        res.status(200).json({
            success:true,
            msg:"category Deleted Succesfully !!"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.updateTapCategory = async (req, res) => {
    try {
        const TapcategoryId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedTapcategory = await TapcategorySchema.findByIdAndUpdate(TapcategoryId, updates, options);
        if (!updatedTapcategory) {
            return res.status(404).json({
                success: false,
                msg: "Tap Category Schema not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Category updated successfully.",
            data: updatedTapcategory
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error."
        });
    }
};


// -- Tap Product ----
exports.createTapProduct = async (req, res) => {
    try {
        const { prodImage, productHeadpara, productBold, productBoldpara, productPrice , productCategory } = req.body;
        if (!prodImage || !productCategory) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            });
        }
        const newTapProduct = new TapProductsSchema({
            prodImage,
            productHeadpara,
            productBold,
            productBoldpara,
            productPrice,
            productCategory
        });
        await newTapProduct.save();
        res.status(200).json({
            success: true,
            data: newTapProduct,
            message: "Product Added Successfully !!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
exports.getAllTapProduct = async (req, res) => {
    try {

        const getAllTapPro = await TapProductsSchema.find()

        if (getAllTapPro.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: getAllTapPro,
            msg: "Product  Found"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.deleteTapProduct = async(req,res)=>{
    try {
        const id = req.params.id
        const checktapProduct = await TapProductsSchema.deleteOne({_id:id})
        if(!checktapProduct){
            return res.status(403).json({
                success: false,
                msg: "Product Not Found"
            })
        }
        // checkProduct.deleteOne()
        res.status(200).json({
            success:true,
            msg:"Product Deleted Succesfully !!"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.updateTapProduct = async (req, res) => {
    try {
        const productTapId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedTapProduct = await TapProductsSchema.findByIdAndUpdate(productTapId, updates, options);
        if (!updatedTapProduct) {
            return res.status(404).json({
                success: false,
                msg: "product Schema not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Product updated successfully.",
            data: updatedTapProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error."
        });
    }
};


// -- Media Center
exports.createMediaCenter = async (req, res) => {
    try {
        const { mediaImage, mediaName} = req.body;
        if (!mediaImage || !mediaName) {
            return res.status(403).json({
                success: false,
                message: "Please Provide All Fields !!"
            });
        }
        const newMediaCenter = new mediaCenterSchema({
            mediaImage,
            mediaName
        });
        await newMediaCenter.save();
        res.status(200).json({
            success: true,
            data: newMediaCenter,
            message: "Media Added Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
exports.getAllMediaCenter = async (req, res) => {
    try {

        const getAllMediaCenter = await mediaCenterSchema.find()

        if (getAllMediaCenter.length === 0) {
            return res.status(403).json({
                success: false,
                msg: "Media Not Found"
            })
        }

        res.status(200).json({
            success: true,
            data: getAllMediaCenter,
            msg: "Media  Found"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.deleteMediaCenter = async(req,res)=>{
    try {
        const id = req.params.id
        const checkMediaCenter = await mediaCenterSchema.deleteOne({_id:id})
        if(!checkMediaCenter){
            return res.status(403).json({
                success: false,
                msg: "Media Not Found"
            })
        }
        // checkProduct.deleteOne()
        res.status(200).json({
            success:true,
            msg:"Media Deleted Succesfully"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.updateMediaCenter = async (req, res) => {
    try {
        const MediaCenterId = req.params.id;
        const updates = req.body;

        // Check if there are no fields to update
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                msg: "No fields to update."
            });
        }

        const options = { new: true }; // Return the modified document
        const updatedMediaCenter = await mediaCenterSchema.findByIdAndUpdate(MediaCenterId, updates, options);
        if (!updatedMediaCenter) {
            return res.status(404).json({
                success: false,
                msg: "Media Schema not found."
            });
        }

        res.status(200).json({
            success: true,
            msg: "Media updated successfully.",
            data: updatedMediaCenter
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error."
        });
    }
};