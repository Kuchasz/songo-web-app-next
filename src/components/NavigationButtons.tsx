import Link from 'next/link';

type ButtonType = 'primary' | 'secondary' | 'home' | 'outline' | 'outline-dark';

interface NavigationButtonProps {
    href: string;
    text: string;
    type?: ButtonType;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function NavigationButton({
    href,
    text,
    type = 'primary',
    className = '',
    size = 'md'
}: NavigationButtonProps) {
    const buttonStyles = {
        primary: 'bg-[#cff245] text-black hover:bg-[#b8d93d]',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        home: 'bg-[#cff245] text-black hover:bg-[#b8d93d]',
        outline: 'border border-gray-700 text-white hover:bg-white hover:text-black',
        'outline-dark': 'border border-white text-white hover:bg-white hover:text-black'
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <div className={`flex justify-center ${className}`}>
            <Link
                href={href}
                className={`rounded-xl transition-colors font-semibold ${buttonStyles[type]} ${sizeStyles[size]}`}
            >
                {text}
            </Link>
        </div>
    );
} 