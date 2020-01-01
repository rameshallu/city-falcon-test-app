export function durationInNiceFormat(durationInMinutes) {
    // const inSeconds = durationInMillis / 1000
    const inMinutes = durationInMinutes / 60
    const inHours = inMinutes / 60
    const inDays = inHours / 24

    if (inDays >= 1) {
        const absValue = Math.abs(Math.round(inDays))
        return `${absValue} days ago`
    } else if (inHours >= 1) {
        const absValue = Math.abs(Math.round(inHours))
        return `${absValue} hours ago`
    } else if (inMinutes >= 1) {
        const absValue = Math.abs(Math.round(inMinutes))
        return `${absValue} minutes ago`
    // } else if (inSeconds >= 1) {
    //     const absValue = Math.abs(Math.round(inSeconds))
    //     return `${absValue} seconds ago`
    } else {
        return 'few seconds ago'
    }
}