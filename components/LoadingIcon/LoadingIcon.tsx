import Image from "next/image";

const LoadingIcon = () => {
    return (
      <div
        className="loading-icon loading-animation"
      >
        <Image src="/logo.png" width={90} height={80} />
      </div>
    );
}

export default LoadingIcon;