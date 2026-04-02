function DoctorProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f4fbff 0%, #eefaf6 45%, #fdfcff 100%)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="container py-5">
        <div
          className="p-4 p-md-5"
          style={{
            background: "rgba(255,255,255,0.78)",
            borderRadius: "28px",
            boxShadow: "0 18px 40px rgba(20, 70, 90, 0.08)",
          }}
        >
          <h1 className="fw-bold mb-4" style={{ color: "#143b52" }}>
            Doctor Profile
          </h1>

          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="text-center p-4 h-100"
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  boxShadow: "0 12px 30px rgba(20, 138, 123, 0.08)",
                }}
              >
                <div style={{ fontSize: "70px" }}>👨‍⚕️</div>
                <h3 className="fw-bold mt-3" style={{ color: "#143b52" }}>
                  {user?.name || "Doctor"}
                </h3>
                <p style={{ color: "#5c7586" }}>{user?.role || "doctor"}</p>
              </div>
            </div>

            <div className="col-md-8">
              <div
                className="p-4 h-100"
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  boxShadow: "0 12px 30px rgba(20, 138, 123, 0.08)",
                }}
              >
                <h4 className="fw-bold mb-4" style={{ color: "#143b52" }}>
                  Profile Information
                </h4>

                <p><strong>Name:</strong> {user?.name || "N/A"}</p>
                <p><strong>Email:</strong> {user?.email || "N/A"}</p>
                <p><strong>Role:</strong> {user?.role || "doctor"}</p>
                <p><strong>Specialization:</strong> Cardiology</p>
                <p><strong>Phone:</strong> 01XXXXXXXXX</p>
                <p><strong>Experience:</strong> 5 Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;