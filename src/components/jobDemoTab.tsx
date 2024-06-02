import { Tabs, Tab } from "@nextui-org/react";
import React from "react";

export type tabsPropsType = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const JobDemoTab = ({ tabs }: { tabs: tabsPropsType[] }) => {
  return (
    <>
      <div className="w-full flex flex-col">
        <Tabs
          aria-label="tabs"
          items={tabs}
          size="lg"
          radius="lg"
          color="primary"
          fullWidth={true}
          variant="solid"
          classNames={{
            cursor: "w-full bg-[#22d3ee]",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
          {(item: tabsPropsType) => (
            <Tab key={item.id} title={item.label}>
              {item.content}
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
};

export default JobDemoTab;
