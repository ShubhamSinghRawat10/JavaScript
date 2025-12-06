function generateOTP(length) {
    let otp = "";
    const digits = "0123456789";

    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    return otp;
}

console.log(generateOTP(6));
console.log(generateOTP(4));
