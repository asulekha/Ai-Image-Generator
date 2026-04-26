import mongoose from "mongoose"


const connectDB = async () => {
        console.log("MONGO URI:", process.env.MONGODB_URI)
    // next three line is event listner and ye record and ye jab chalta jab 4th line wala kam ho jata h 
    mongoose.connection.on('connected', () => {
        console.log("Database Connected")
    })
   await mongoose.connect(process.env.MONGODB_URI)
    console.log("MONGO URI:", process.env.MONGODB_URI)
}
export default connectDB

