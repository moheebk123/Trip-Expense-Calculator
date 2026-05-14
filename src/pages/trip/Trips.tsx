import { AddTrip, Header, Remove, TripsBox } from "@/components";

function Trips() {
  return (
    <div className="px-3 py-6 flex flex-col gap-5">
      {/* Header */}
      <Header />

      {/* Remove All Data */}
      <Remove />

      {/* Add Trip */}
      <AddTrip />

      {/* Trips */}
      <TripsBox />
    </div>
  );
}

export default Trips;
