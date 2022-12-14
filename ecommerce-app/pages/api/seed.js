import db from "../../utils/mongo"
import User from "../../models/User"
import data from "../../utils/testdata"
import Product from "../../models/Product"

const handler = async (req, res) => {
    await db.connect();
    // await User.insertMany(data.users);
    await Product.insertMany(data.products)
    await db.disconnect();
    res.send({message: 'seeded successfully'})
}

export default handler