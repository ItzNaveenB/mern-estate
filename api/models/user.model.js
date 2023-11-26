import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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
        async validate(value) {
            if (this.isModified('password')) {
                this.password = value;
            } else {
                return;
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(this.password, salt);
            this.password = hashedPass;
        }
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
