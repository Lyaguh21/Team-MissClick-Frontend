import axios from "axios";
import { useState } from "react";

export const auditSlice = () => {
  const [audit, setAudit] = useState([]);

  const fetchAudit = async () => {
    const response = await axios.get("/api/audit/history"); // Убедись, что путь правильный
    setAudit(response.data);
  };

  return { audit, fetchAudit };
};
