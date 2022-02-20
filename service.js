const { calcOffset } = require('./helper')
const Contact= require('./model')

//login contact
const loginContact = async (email) =>{
    const contact= Contact.find({email})
    if (!contact.isAdmin){
        return {'message':'You are not an admin'}
    }
    return contact
}
// helper to add to the contact database
const addContact = async (contactInput) =>{
    const contact=new Contact(contactInput)
    await contact.save()
    return contact
}
// helper to add multiple contacts to the contact database
const addContacts = async (contactInputList) =>{
    const contacts= await Contact.insertMany(contactInputList)
    return contacts
}

const getContact = async (contactId) =>{
    const contact= Contact.find({_id:contactId})
    return contact
}

const getContacts = async ({conditions={}, pageNo=1, pageSize=3}) =>{
    pageNo=parseInt(pageNo)
    console.log('yrsmn')
    pageSize=parseInt(pageSize)
    const contacts= Contact.find(conditions).skip(calcOffset({pageNo,pageSize})).limit(pageSize).lean()
    return contacts
}

const updateContactInfo = async ({contactId, updates}) =>{
    const updatedInfo=await Contact.findOneAndUpdate({_id:contactId}, updates, {
        new: true
    })
    
    return updatedInfo
    
}
const deleteContact= async (contactId)=>{
    const result=await Contact.deleteOne({
        _id:contactId
    })
    return result
}

module.exports= {loginContact,addContact,addContacts, getContact, getContacts, updateContactInfo, deleteContact}