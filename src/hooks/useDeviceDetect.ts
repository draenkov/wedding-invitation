import { useState, useEffect } from 'react';

type Device = 'mobile' | 'tablet' | 'desktop';

const useDeviceDetect = (): Device => {
    const [device, setDevice] = useState<Device>('desktop');

    useEffect(() => {
        const handleDeviceDetection = (): void => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
            const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

            if (isMobile) {
                setDevice('mobile');
            } else if (isTablet) {
                setDevice('tablet');
            } else {
                setDevice('desktop');
            }
        };

        handleDeviceDetection();
        window.addEventListener('resize', handleDeviceDetection);

        return () => {
            window.removeEventListener('resize', handleDeviceDetection);
        };
    }, []);

    return device;
};

export default useDeviceDetect;
