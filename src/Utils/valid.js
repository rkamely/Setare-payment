const FormValidationer = (name, email, company, phone, inquiry) => {
    return new Promise((resolve, reject) => {
        let errorObject = {};
        if (name === '' || name === undefined){
            errorObject['name'] = 'Please enter name';
            reject(errorObject);
        }
        if (email === '' || email === undefined){
            errorObject['email'] = 'Please enter email';
            reject(errorObject);
        }
        if (company === '' || company === undefined){
            errorObject['company'] = 'Please enter company';
            reject(errorObject);
        }
        if (phone === '' || phone === undefined){
            errorObject['phone'] = 'Please enter phone';
            reject(errorObject);
        }
        if (inquiry === '' || inquiry === undefined){
            errorObject['inquiry'] = 'Please enter inquiry';
            reject(errorObject);
        }
        resolve(true);
    })
}

export default FormValidationer;