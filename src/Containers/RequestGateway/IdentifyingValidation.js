const IdentifyingValidation = (identify) => {

    return new Promise((resolve, reject) => {

        let errors = {};

        if (identify.firstName === "" || identify.firstName === undefined) {
            errors['firstName'] = 'لطفا نام خود را به فارسی وارد فرمایید';
            reject(errors);
        }
        if (identify.lastName === "" || identify.lastName === undefined) {
            errors['lastName'] = 'لطفا نام خانوادگی خود را به فارسی وارد فرمایید';
            reject(errors);
        }
        if (identify.fatherName === "" || identify.fatherName === undefined) {
            errors['fatherName'] = '"لطفا نام پدر خود را به فارسی وارد فرمایی';
            reject(errors);
        }
        if (identify.enFirstName === "" || identify.enFirstName === undefined) {
            errors['enFirstName'] = 'لطفا نام خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.enLastName === "" || identify.enLastName === undefined) {
            errors['enLastName'] = 'لطفا نام خانوادگی خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.enFatherName === "" || identify.enFatherName === undefined) {
            errors['enFatherName'] = 'لطفا نام پدر خود را به انگلیسی وارد فرمایید';
            reject(errors);
        }
        if (identify.nationalId === "" || identify.nationalId === undefined) {
            errors['nationalId'] = 'لطفا کد ملی خود را وارد فرمایید';
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