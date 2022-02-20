const mongoose= require('mongoose')

const contactSchema= new mongoose.Schema({
    first_name:{
        type: String,
        maxlength: [50, 'First name can only take up to 50 letters'],
        required: [true,'First name is required']

    },
    last_name:{
        type: String,
        maxlength: [50, 'Last name can only take up to 50 letters'],
        required: [true,'Last name is required']
        
    },
    email:{
        type: String,
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        maxlength: [50, 'Email can only take up to 50 characters'],
        required: [true,'Email is required']
    },
    phone:{
        type: String,
        unique:true,
        maxlength: [50, 'Phone number can only take up to 50 characters'],
        required: [true,'Phone number is required']
    },
    job_title:{
        type: String,
        maxlength: [50, 'Job title can only take up to 50 letters'],
    },
    company_name:{
        type: String,
        maxlength: [100, 'company can only take up to 100 letters']
    },
    birthday_month:{
        type: Number,
        maxlength:2,
        min:[1,'Birthday month must be in between 1 and 12 inclusive'],
        max:[12,'Birthday month must be in between 1 and 12 inclusive'],
        required:true
    },
    birthday_year:{
        type: Number,
        min:[1700,'Invalid birth year'],
        max:[2022,'Invalid birth year'],
        required:true
    },
    country:{
        type:String,
        required:[true, 'Country is required']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
}) 
contactSchema.path('email').validate(async(email) => {
    const emailCount=await mongoose.models.Contact.countDocuments({email})
    return !emailCount
},'Email already exists')
contactSchema.path('phone').validate(async(phone) => {
    const phoneCount=await mongoose.models.Contact.countDocuments({phone})
    return !phoneCount
},'Phone already exists')

module.exports=mongoose.model('Contact',contactSchema)