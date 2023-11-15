import Spinner from "./Spinner";
export default function Button(
    {
        onPress,
        children,
        backgroundColor,
        textColor,
        classNameArg,
        disabled,
        showLoader,
        loaderSize = 'small',
        loaderSide = 'right',
        icon,
    }
) {
    return (
        <button

            disabled={disabled || false}
            className={`${showLoader || icon ? '!justify-between' : '!justify-center'}
                        ${classNameArg || ''}
                        ${backgroundColor || 'bg-primary-0'}
                        ${textColor || 'text-white'}`
            }
            onClick={onPress}
        >
            {showLoader && loaderSide === 'left' && !disabled && (
                <Spinner
                    Size={loaderSize}
                    Color={loaderColor}
                    Class={'ml-1'}
                />
            )}
            {icon}
            {children}
            {showLoader && loaderSide === 'right' && !disabled && (
                <Spinner
                    Size={loaderSize}
                    Color={loaderColor}
                    Class={'mr-1'}
                />
            )}
        </button>
    );
}

