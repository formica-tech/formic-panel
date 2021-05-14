import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Card } from "baseui/card";
import { Cell, Grid } from "baseui/layout-grid";
import { Table } from "baseui/table";
import { H1, H2, Paragraph1 } from "baseui/typography";
import Fade from "components/Fade";
import GqlLoadable from "components/GqlLoadable";
import {
  useListMachineDeviceSignalsQuery,
  useListMachineDevicesQuery,
} from "gql";
import React from "react";
import { useRouteMatch } from "react-router-dom";

const MachineDetail = () => {
  const match = useRouteMatch<{ id: string }>("/machine/:id");
  console.log(match);
  const id = match?.params.id || "Invalid Machine";
  const [css] = useStyletron();
  const machineDevicesResponse = useListMachineDevicesQuery({
    variables: { machineId: id },
  });

  const machineDeviceSignalsResult = useListMachineDeviceSignalsQuery({
    variables: {
      machineId: id,
      offset: 0,
      limit: 10,
    },
  });

  return (
    <Fade>
      <Grid gridGutters={8} gridGaps={16}>
        <Cell span={[4, 4, 4]}>
          <img
            className={css({
              width: "100%",
            })}
            src={
              "https://freepngimg.com/thumb/machine/55366-1-factory-machine-free-png-hq.png"
            }
          />
        </Cell>
        <Cell span={[4, 4, 4]}>
          <H1>{id}</H1>
          <H2>Machine Name</H2>
          <Paragraph1>some description here</Paragraph1>
        </Cell>

        <Cell span={[4, 8, 4]}>
          <Card title={"Device Connections"}>
            <GqlLoadable
              render={(data) => (
                <Table
                  columns={["id", "name"]}
                  data={data.device_signal.map(({ device }) => [
                    device?.id,
                    device?.name,
                  ])}
                />
              )}
              queryResult={machineDevicesResponse}
            />
          </Card>
        </Cell>
        <Cell span={[4, 8, 12]}>
          <GqlLoadable
            render={(data) => (
              <Table
                columns={["id", "device", "action", "payload", "time"]}
                data={data.signals.map(
                  ({ id, deviceId, event, payload, timestamp }) => [
                    id,
                    deviceId,
                    event,
                    JSON.stringify(payload),
                    timestamp,
                  ]
                )}
              />
            )}
            queryResult={machineDeviceSignalsResult}
          />
        </Cell>
      </Grid>
    </Fade>
  );
};

export default MachineDetail;
