import { Button } from "baseui/button";
import { Card } from "baseui/card";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Plus } from "baseui/icon";
import { Spinner } from "baseui/spinner";
import Fade from "components/Fade";
import Scale from "components/Scale";
import SpaceBetween from "components/SpaceBetween";
import {
  useListMachineCountSubscription,
  useListMachinesSubscription,
  useCreateMachineMutation,
} from "gql";
import React, { useState } from "react";
import { Cell, Grid } from "baseui/layout-grid";
import { Pagination } from "baseui/pagination";
import { Link } from "react-router-dom";

const MachineCard = ({ name, id }: { name: string; id: string }) => {
  return (
    <Link to={"machine/" + id}>
      <Card
        headerImage={
          "https://freepngimg.com/thumb/machine/55366-1-factory-machine-free-png-hq.png"
        }
      >
        {name} - {id}
      </Card>
    </Link>
  );
};
const MachineGridList = ({
  machines = [],
  loading,
}: {
  machines?: { id: string; name: string }[];
  loading: boolean;
}) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <FlexGrid
      flexGridColumnCount={[1, 2, 4, 4]}
      flexGridColumnGap={"1rem"}
      flexGridRowGap={"1rem"}
    >
      {machines.map(({ id, name }) => (
        <FlexGridItem>
          <Scale>
            <MachineCard name={name} id={id} />
          </Scale>
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
};

const Machinelist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const listMachines = useListMachinesSubscription({
    variables: { offset: pageSize * (currentPage - 1), limit: pageSize },
  });
  const machineCount = useListMachineCountSubscription();
  const [createMachine] = useCreateMachineMutation();
  const totalCount = machineCount.data?.count?.aggregate?.count ?? 0;
  return (
    <Fade>
      <Grid gridGutters={8} gridGaps={16}>
        <Cell span={[4, 8, 12]}>
          <SpaceBetween>
            <Pagination
              numPages={Math.ceil(totalCount / pageSize)}
              currentPage={currentPage}
              onPageChange={({ nextPage }) => {
                setCurrentPage(Math.min(Math.max(nextPage, 1), pageSize));
              }}
            />
            <Button
              onClick={() => {
                const machineId = String(Date.now());
                createMachine({
                  variables: { id: machineId, name: "Machine " + machineId },
                }).catch(console.error);
              }}
            >
              <Plus size={24} />
            </Button>
          </SpaceBetween>
        </Cell>
        <Cell span={[4, 8, 12]}>
          <MachineGridList
            machines={listMachines.data?.machine}
            loading={listMachines.loading}
          />
        </Cell>
      </Grid>
    </Fade>
  );
};

export default Machinelist;
