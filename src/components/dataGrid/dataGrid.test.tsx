import { MyData, rows } from "./dataGrid";
import { render, fireEvent, screen } from "@testing-library/react";
import { DataGrid } from "@material-ui/data-grid";
import { mocked } from "ts-jest/utils";

jest.mock("@material-ui/data-grid", () => ({
  ...jest.requireActual("@material-ui/data-grid"), // get all the material ui elements which used
  DataGrid: jest.fn(() => <div>Table</div>), // it get just datagrid
}));

const mockDataGrid = mocked(DataGrid);

describe("data component", () => {
  beforeEach(() => {
    mockDataGrid.mockClear();
  });
  it("render material-ui row datas", () => {
    const myMoney = jest.fn();
    render(<MyData onMoney={myMoney} />);
    fireEvent.click(screen.getByRole("button", { name: "Give me 33 dollars" }));
    expect(myMoney).toHaveBeenCalledTimes(1);
    expect(myMoney).toHaveBeenCalledWith(33);
  });

  it("render table passing the expected props", () => {
    render(<MyData onMoney={jest.fn()} />);
    expect(mockDataGrid).toHaveBeenCalledTimes(1);
    expect(mockDataGrid).toHaveBeenCalledWith(
      {
        rows: rows,
        columns: [
          expect.objectContaining({ field: "id" }),
          expect.objectContaining({ field: "firstName" }),
          expect.objectContaining({ field: "lastName" }),
          expect.objectContaining({ field: "age" }),
        ],
        pageSize: 5,
        checkboxSelection: true,
      },
      {}
    );
  });
});
