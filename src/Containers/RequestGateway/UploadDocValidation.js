const UploadDocValidation = (upload) => {

    return new Promise((resolve, reject) => {

        let errors = {};

        if (upload.nationalCard === "" || upload.nationalCard === undefined) {
            errors['nationalCard'] = 'لطفا عکس کارت ملی خود را بارگذاری فرمایید.';
            reject(errors);
        }
        if (upload.birthCertificate === "" || upload.birthCertificate === undefined) {
            errors['birthCertificate'] = 'لطفا عکس شناسنامه خود را بارگذاری فرمایید.';
            reject(errors);
        }

        resolve(true)
    })
}

export default UploadDocValidation;