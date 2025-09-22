// components/LogoLoader.tsx
const Ablogo = "/assets/ABloading.png";

const LogoLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f5f5, #eaeaea)",
      }}
    >
      <img
        src={Ablogo}
        alt="Abhinandan logo loading"
        style={{
          width: 200,
          height: 200,
          borderRadius: 24,
          boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          animation: "pulse 2s infinite",
        }}
      />
    </div>
  );
};

export default LogoLoader;