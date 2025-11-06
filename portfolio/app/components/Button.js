export default function Button({ children, onClick, variant = 'primary', className = '' }) {
    const base = 'rounded-lg px-4 py-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
        primary: 'bg-cyan-400 text-gray-900 hover:bg-cyan-500 focus:ring-cyan-400',
        secondary: 'border border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 focus:ring-cyan-400',
        ghost: 'text-gray-400 hover:text-cyan-400 focus:ring-cyan-400'
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
