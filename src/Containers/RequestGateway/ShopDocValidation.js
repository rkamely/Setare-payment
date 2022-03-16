const ShopDocValidation = (shopInfo) => {

    return new Promise((resolve, reject) => {

        let errors = {};

        if (shopInfo.shopName === "" || shopInfo.shopName === undefined) {
            errors['shopName'] = 'لطفا نام فروشگاه خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.enShopName === "" || shopInfo.enShopName === undefined) {
            errors['enShopName'] = 'لطفا نام فروشگاه خود را به انگلیسی فرمایید.';
            reject(errors);
        }
        if (shopInfo.webSiteURL === "" || shopInfo.webSiteURL === undefined) {
            errors['webSiteURL'] = 'لطفا آدرس وبسایت خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.callBack === "" || shopInfo.callBack === undefined) {
            errors['callBack'] = 'لطفا آدرس وبسایت پشتیبان خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.emailShop === "" || shopInfo.emailShop === undefined) {
            errors['emailShop'] = 'لطفا آدرس ایمیل فروشگاه خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.phoneShop === "" || shopInfo.phoneShop === undefined) {
            errors['phoneShop'] = 'لطفا شماره تلفن فروشگاه خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.postalCodeShop === "" || shopInfo.postalCodeShop === undefined) {
            errors['postalCodeShop'] = 'لطفا کد پستی فروشگاه خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.classCode === "" || shopInfo.classCode === undefined) {
            errors['classCode'] = 'لطفا صنف خود را انتخاب فرمایید.';
            reject(errors);
        }
        if (shopInfo.subClassCode === "" || shopInfo.subClassCode === undefined) {
            errors['subClassCode'] = 'لطفا زیر مجموع صنف خود را انتخاب فرمایید.';
            reject(errors);
        }
        if (shopInfo.activity === "" || shopInfo.activity === undefined) {
            errors['activity'] = 'لطفا نوع فعالیت خود را انتخاب فرمایید.';
            reject(errors);
        }
        if (shopInfo.noContract === "" || shopInfo.noContract === undefined) {
            errors['noContract'] = 'لطفا شماره قرارداد خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.endDateContract === "" || shopInfo.endDateContract === undefined) {
            errors['endDateContract'] = 'لطفا تاریخ پایان قرارداد خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.uploadLogo === "" || shopInfo.uploadLogo === undefined) {
            errors['uploadLogo'] = 'لطفا لوگوی فروشگاه خود را آپلود فرمایید.';
            reject(errors);
        }
        if (shopInfo.accountNo === "" || shopInfo.accountNo === undefined) {
            errors['accountNo'] = 'لطفا شماره شبای خود را وارد فرمایید.';
            reject(errors);
        }
        if (shopInfo.taxCode === "" || shopInfo.taxCode === undefined) {
            errors['taxCode'] = 'لطفا کد رهگیری مالیاتی خود را وارد فرمایید.';
            reject(errors);
        }
        resolve(true)
    })
}

export default ShopDocValidation;