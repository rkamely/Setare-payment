const IdentifyingValidation = (identify) => {
    const farsiCheckRegex = /^([\u0600-\u06FF]+\s?)+$/
    const englishCheckRegex = /^[a-zA-Z]+$/
    const numberCheckRegex = /^[0-9\b]+$/
    const nationalIdCheckRegex = /^\d{10}$/


    // console.log(!farsiCheckRegex.test(identify.firstName))
    return new Promise((resolve, reject) => {

        let errors = {};

        if (identify.firstName === "" || identify.firstName === undefined) {
            errors['firstName'] = 'لطفا نام خود را به فارسی وارد فرمایید';
            reject(errors);
        } else if (!farsiCheckRegex.test(identify.firstName)) {
            errors['firstName'] = 'لطفا نام خود را به فارسی وارد فرمایید';
            reject(errors);
        }
        if (identify.lastName === "" || identify.lastName === undefined) {
            errors['lastName'] = 'لطفا نام خانوادگی خود را به فارسی وارد فرمایید';
            reject(errors);
        } else if (!farsiCheckRegex.test(identify.lastName)) {
            errors['lastName'] = 'لطفا نام خانوادگی خود را به فارسی وارد فرمایید';
            reject(errors);
        }
        if (identify.fatherName === "" || identify.fatherName === undefined) {
            errors['fatherName'] = '"لطفا نام پدر خود را به فارسی وارد فرمایید';
            reject(errors);
        } else if (!farsiCheckRegex.test(identify.fatherName)) {
            errors['fatherName'] = 'لطفا نام پدر خود را به فارسی وارد فرمایید';
            reject(errors);
        }
        if (identify.enFirstName === "" || identify.enFirstName === undefined) {
            errors['enFirstName'] = 'لطفا نام خود را به انگلیسی وارد فرمایید';
            reject(errors);
        } else if (!englishCheckRegex.test(identify.enFirstName)) {
            errors['enFirstName'] = 'لطفا نام خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.enLastName === "" || identify.enLastName === undefined) {
            errors['enLastName'] = 'لطفا نام خانوادگی خود را به انگلیسی وارد فرمایید';
            reject(errors);
        } else if (!englishCheckRegex.test(identify.enLastName)) {
            errors['enLastName'] = 'لطفا نام خانوادگی خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.enFatherName === "" || identify.enFatherName === undefined) {
            errors['enFatherName'] = 'لطفا نام پدر خود را به انگلیسی وارد فرمایید';
            reject(errors);
        } else if (!englishCheckRegex.test(identify.enFatherName)) {
            errors['enFatherName'] = 'لطفا نام پدر خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.nationalId === "" || identify.nationalId === undefined) {
            errors['nationalId'] = 'لطفا کد ملی خود را وارد فرمایید';
            reject(errors);
        } else if (!numberCheckRegex.test(identify.nationalId) || !nationalIdCheckRegex.test(identify.nationalId)) {
            errors['nationalId'] = 'کد ملی وارد شده نا معتبر است';
            reject(errors);
        }
        if (identify.birthDay === "" || identify.birthDay === undefined) {
            errors['birthDay'] = 'لطفا تاریخ تولد خود را وارد فرمایید';
            reject(errors);
        }
        if (identify.mobile === "" || identify.mobile === undefined) {
            errors['mobile'] = 'لطفا شماره موبایل خود را وارد فرمایید';
            reject(errors);
        }
        if (identify.phone === "" || identify.phone === undefined) {
            errors['phone'] = 'لطفا شماره تلفن ثابت خود را وارد فرمایید';
            reject(errors);
        }
        resolve(true)
    })
}

export default IdentifyingValidation;