import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, 'User already exists']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
        maxLength: 20,
        required: [true, 'Password is required'],
        validate(value) {
            if (this.isModified('password')) {
                this.password = value;
            }
            else {
                return next();
            }
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(this.password, salt, (error, hashedPass) => {
                    if (error) throw error;
                    this.password = hashedPass;
                    next()
                })
            });
        }
    }
},{timestamps:true});

const User = mongoose.model('User',UserSchema);

export default User;