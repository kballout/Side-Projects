import db from "../../utils/mongo"
import User from "../../models/User"
import data from "../../utils/testdata"

const handler = async (req, res) => {
    await db.connect();
    await User.insertMany(data.users);
    await db.disconnect();
    res.send({message: 'seeded successfully'})
}

export default handler