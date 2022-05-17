import Image from "next/image";

const LoadingIcon = () => {
    return (
      <div className="loading-icon loading-animation">
        <Image src="/logo.png" width={90} height={80} alt="loading icon" />
      </div>
    );
}

export default LoadingIcon;