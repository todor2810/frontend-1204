import { timestampToDays } from '../../utils';

export const isNameValid = (value) => {
    return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
    return value.length > 0 && value.length <= 5;
}

export const isExpirationDateValid = (expirationDate) => {
    if (!expirationDate) return true;
    return timestampToDays(new Date(expirationDate) - Date.now()) >= 30;
}
