import React, { useState } from "react";

const BUNNY =
  "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return <BuggyButtons />;
}

const BuggyButtons = () => {
  const [openCount, setOpenCount] = useState(0);
  const IDs = [1, 2, 3, 4, 5];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          {IDs.map((item) => (
            <div
              key={item}
              style={{
                marginRight: 10,
              }}
              id={item}
            >
              <BuggyButton openCount={openCount} setOpenCount={setOpenCount} />
            </div>
          ))}
        </div>
        <div style={{ alignSelf: "center", marginTop: 20 }}>
          {openCount + " açık tavşan "}
        </div>
      </div>
    </>
  );
};

const BuggyButton = ({ openCount, setOpenCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <img
      alt="bunny"
      src={BUNNY}
      height={300}
      width={200}
      onClick={() => {
        setOpenCount((p) => p - 1);
        setIsOpen(false);
      }}
    />
  ) : (
    <button
      onClick={() => {
        setOpenCount((p) => p + 1);
        setIsOpen(true);
      }}
    >
      TAVŞAN AÇ
    </button>
  );
};

export default App;
