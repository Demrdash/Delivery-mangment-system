import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDriverShipments, updateShipmentStatus } from "./driverService";

export const fetchDriverShipments = createAsyncThunk(
  "driver/fetchShipments",
  async (driverId, thunkAPI) => {
    try {
      const res = await getDriverShipments(driverId);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

export const changeShipmentStatus = createAsyncThunk(
  "driver/changeShipmentStatus",
  async ({ shipmentId, newStatus }, thunkAPI) => {
    try {
      const res = await updateShipmentStatus(shipmentId, newStatus);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

const driverSlice = createSlice({
  name: "driver",
  initialState: {
    shipments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDriverShipments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDriverShipments.fulfilled, (state, action) => {
        state.loading = false;
        state.shipments = action.payload;
      })
      .addCase(fetchDriverShipments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeShipmentStatus.fulfilled, (state, action) => {
        const updated = action.payload;
        state.shipments = state.shipments.map(ship =>
          ship._id === updated._id ? updated : ship
        );
      });
  },
});

export default driverSlice.reducer;
