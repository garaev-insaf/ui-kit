interface EnergyProps {
    color?: string;
}

export const EnergyIcon = ({ color = 'currentColor' }: EnergyProps) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.4998 23.0767C18.6174 23.0767 23.5767 18.1174 23.5767 11.9998C23.5767 5.88216 18.6174 0.922852 12.4998 0.922852C6.38216 0.922852 1.42285 5.88216 1.42285 11.9998C1.42285 18.1174 6.38216 23.0767 12.4998 23.0767Z"
            fill="white"
            stroke={color}
            stroke-width="0.923077"
        />
        <path
            d="M11.2079 19.3848H10.3873L11.2079 13.6432H8.33712C7.86082 13.6432 7.86913 13.3811 8.02513 13.1014C8.18113 12.8226 8.06611 13.0358 8.08254 13.0026C9.14408 11.1288 10.7318 8.34109 12.8456 4.62109H13.6662L12.8456 10.3626H15.7164C16.1188 10.3626 16.1761 10.6331 16.1022 10.7808L16.0447 10.9036C12.814 16.5528 11.2078 19.3866 11.2078 19.3866L11.2079 19.3848Z"
            fill={color}
        />
    </svg>
);
