import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  textPosition?: 'right' | 'bottom'
  showText?: boolean
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  textPosition = 'right',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  const logoImage = (
    <div className={`${sizeClasses[size]} relative rounded-lg overflow-hidden shadow-md`}>
      <Image
        src={`${process.env.NODE_ENV === 'production' ? '/Surf-Hani' : ''}/logo_covehouse.jpg`}
        alt="The Cove Surf House Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  )

  if (!showText) {
    return <div className={className}>{logoImage}</div>
  }

  const logoText = (
    <div className="flex flex-col">
      <span className={`font-bold ${textSizeClasses[size]} leading-tight`}>
        The Cove Surf House
      </span>
      <span className={`text-sm opacity-80 ${size === 'sm' ? 'text-xs' : ''}`}>
        Comfortable stays
      </span>
    </div>
  )

  return (
    <div 
      className={`flex items-center ${
        textPosition === 'right' ? 'flex-row space-x-3' : 'flex-col space-y-2 text-center'
      } ${className}`}
    >
      {logoImage}
      {textPosition === 'right' && logoText}
      {textPosition === 'bottom' && logoText}
    </div>
  )
}

export default Logo 