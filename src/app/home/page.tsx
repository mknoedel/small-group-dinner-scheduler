'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
  GridFilterModel,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
  randomAddress,
  randomCompanyName,
} from '@mui/x-data-grid-generator';
import { NextPage } from 'next';
import { FormControlLabel, Stack, Switch } from '@mui/material';
import { useState } from 'react';

const groups = ['MMM', '1Y', 'Kellogg'];
const randomGroup = () => {
  return randomArrayItem(groups);
};

const initialRows: GridRowsProp = [
  {
    id: randomId(),
    host: randomTraderName(),
    partyDate: randomCreatedDate(),
    group: randomGroup(),
    name: randomCompanyName(),
    description: randomAddress(),
  },
  {
    id: randomId(),
    host: randomTraderName(),
    partyDate: randomCreatedDate(),
    group: randomGroup(),
    name: randomCompanyName(),
    description: randomAddress(),
  },
  {
    id: randomId(),
    host: randomTraderName(),
    partyDate: randomCreatedDate(),
    group: randomGroup(),
    name: randomCompanyName(),
    description: randomAddress(),
  },
  {
    id: randomId(),
    host: randomTraderName(),
    partyDate: randomCreatedDate(),
    group: randomGroup(),
    name: randomCompanyName(),
    description: randomAddress(),
  },
  {
    id: randomId(),
    host: randomTraderName(),
    partyDate: randomCreatedDate(),
    group: randomGroup(),
    name: randomCompanyName(),
    description: randomAddress(),
  },
  {
    id: randomId(),
    host: randomTraderName(),
    partyDate: randomCreatedDate(),
    group: randomGroup(),
    name: randomCompanyName(),
    description: randomAddress(),
  },
  {
    id: randomId(),
    host: randomTraderName(),
    partyDate: randomCreatedDate(),
    group: randomGroup(),
    name: randomCompanyName(),
    description: randomAddress(),
  },
];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      { id, host: '', partyDate: '', group: '', name: '', description: '', isNew: true },
      ...oldRows,
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter />
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const DinnerTable: NextPage = () => {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
    quickFilterValues: [],
  });
  const [ignoreDiacritics, setIgnoreDiacritics] = useState(true);

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const columns: GridColDef[] = [
    { field: 'host', headerName: 'Host', width: 180, editable: true },
    {
      field: 'partyDate',
      headerName: 'Party Date',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'group',
      headerName: 'Group',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: groups,
    },
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'description', headerName: 'description', width: 400, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={id}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={id}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key={id}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={id}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Stack spacing={2} padding={2}>
      <FormControlLabel
        checked={ignoreDiacritics}
        onChange={(event) => setIgnoreDiacritics((event.target as HTMLInputElement).checked)}
        control={<Switch />}
        label="Ignore diacritics"
      />
      <Stack>
        <DataGrid
          key={ignoreDiacritics.toString()}
          ignoreDiacritics={ignoreDiacritics}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 100]}
          filterModel={filterModel}
          onFilterModelChange={setFilterModel}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnSelector
          disableDensitySelector
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: EditToolbar as GridSlots['toolbar'] }}
          slotProps={{
            toolbar: { setRows, setRowModesModel, showQuickFilter: true },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default DinnerTable;
