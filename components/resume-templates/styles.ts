import { StyleSheet } from "@react-pdf/renderer";

export const sharedStyles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.5,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 2,
  },
  text: {
    marginBottom: 4,
    color: "#333333",
  },
  bold: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const colors = {
  primary: "#2563eb", // Blue
  secondary: "#4b5563", // Gray
  text: "#1f2937", // Dark Gray
  lightGray: "#f3f4f6",
};
