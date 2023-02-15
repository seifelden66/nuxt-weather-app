const useDarkMode = () => {
    let isDarkMode = ref(false)
    const today = new Date()

    today.getHours() < 8 || today.getHours() > 20
        ? isDarkMode.value = true
        : isDarkMode.value = false

    return {
        isDarkMode,
    }
}

export default useDarkMode