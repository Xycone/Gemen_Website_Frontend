import React, { useCallback, useEffect, useState } from 'react'

function useReCaptchaV3(sitekey) {
    const [isReCaptchaReady, setIsReCaptchaReady] = useState(false)

    useEffect(() => {
        if (window.grecaptcha) {
            setIsReCaptchaReady(true)
        } else {
            const script = document.createElement('script')
            script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`
            script.asyc = true 
            document.head.appendChild(script)
            script.onload = () => {setIsReCaptchaReady(true)}
        }
    }, [sitekey])

    const executeRecaptcha = useCallback(async (action) => {
        if (isReCaptchaReady && window.grecaptcha) {
            const token = await window.grecaptcha.execute(sitekey, { action });
            return token;
        }
    })
    return executeRecaptcha
}

export default useReCaptchaV3