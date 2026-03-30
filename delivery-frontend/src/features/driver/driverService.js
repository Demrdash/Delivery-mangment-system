import api from "../../services/api";

// Get shipments for current driver
export const getDriverShipments = async (driverId) => {
  const response = await api.get(`/shipment/shipments/driver/${driverId}`);
  return response.data;
};

// Update shipment status
export const updateShipmentStatus = async (shipmentId, newStatus) => {
  const response = await api.patch(`/shipment/shipments/${shipmentId}`, { status: newStatus });
  return response.data;
};