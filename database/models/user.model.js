

import  {Schema,model}  from "mongoose";


const UserSchema=new Schema({
    name:{
        type:String,
        minLength:[3,"Too short UserName"],
        maxLength:[15,"Too long UserName"],
        required:[true,"UserName is required"],

    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        maxLength: [30, 'Password should be maximum 30 characters long'],
        minlength: [8, 'Password should be at least 8 characters long'],
        validate: {
          validator: function(value) {
            // Check if the value contains at least 8 characters
            if (value.length < 8) {
              return false;
            }
        
            // Check if the value contains no more than 30 characters
            if (value.length > 30) {
              return false;
            }
        
            // Check if the value contains at least one letter
            if (!/[a-zA-Z]/.test(value)) {
              return false;
            }
        
            // Check if the value contains at least one number
            if (!/\d/.test(value)) {
              return false;
            }
        
            // If all conditions pass, the value is valid
            return true;
          },
          message: "Password must be between 8 and 30 characters and include both letters and numbers."
        }
        
      },


      age:{
        type:Number,
        min:[18],
        max:[100],
      },
      verified:{
        type:Boolean,
        default:false,
      },
      isActive:{
        type:Boolean,
        default:true
      }

},{timestamps:true}
)

const UserModel = model('user', UserSchema);

export default UserModel;