import {Facebook, Instagram, LinkedIn} from '@mui/icons-material';

export const createIcon = (name, fill) => {
    switch (name) {
        case 'instagram':
            return <Instagram fill={fill}/>
        case 'linkedIn':
            return <LinkedIn fill={fill}/>
        case 'facebook':
            return <Facebook fill={fill}/>
        default:
            return null
    }
}
export const getAuthorName = (name) => {
    switch (name) {
        case 'instagram':
            return "remy_sharp"
        case 'linkedIn':
            return "Remy Sharp"
        case 'facebook':
            return "Remy Sharp"
        default:
            return null
    }
}

export function truncateString(text, maxLength) {
    if (text.length > maxLength) {
        const slicedText= text.slice(0, maxLength);
        return slicedText.split('\n')
    }
    return text.split('\n');
}
export function excludeString(originalString, stringToExclude) {
    return originalString.replace(stringToExclude, '');
}
