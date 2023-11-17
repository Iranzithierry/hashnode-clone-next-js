import Spinner from "./Spinner";
export default function Button(
    {
        onPress,
        children,
        backgroundColor,
        textColor,
        classNameArg,
        fontClassArg,
        disabled,
        showSpinner = false,
        spinnerColor = null,
        spinnerSize = null,
        spinnerSide = 'right',
        spinnerBgColor = null,
        icon,
    }
) {
    return (
        <button

            disabled={disabled || false}
            className={`!justify-center ${classNameArg || ''} ${backgroundColor || 'bg-primary-0'}`
            }
            onClick={onPress}
        >
            {showSpinner && spinnerSide === 'left' && !disabled && (
                <Spinner
                    Size={spinnerSize}
                    Color={spinnerColor}
                    bgColor={spinnerBgColor}
                    Class={'ml-1'}
                />
            )}
            <span>
                {icon}
            </span>
            <p className={`${fontClassArg || ''} ${textColor || 'text-white'} font-inter`}>
                {children}
            </p>
            {showSpinner && spinnerSide === 'right' && !disabled && (
                <Spinner
                    Size={spinnerSize}
                    Color={spinnerColor}
                    bgColor={spinnerBgColor}
                    Class={'ml-2'}
                />
            )}
        </button>
    );
}

