import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

const Test = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-violet-11 shadow-md hover:bg-violet-3 focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] rounded-md bg-white p-1 shadow-lg shadow-black/30 animate-in fade-in-0 zoom-in-95"
          sideOffset={5}
        >
          <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1 data-[disabled]:pointer-events-none data-[disabled]:text-mauve-8">
            New Tab <div className="ml-auto pl-5 text-mauve-11">⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1">
            New Window <div className="ml-auto pl-5 text-mauve-11">⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            disabled
            className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-mauve-8 outline-none"
          >
            New Private Window <div className="ml-auto pl-5">⇧+⌘+N</div>
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[state=open]:bg-violet-4 data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1">
              More Tools
              <div className="ml-auto pl-5">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="min-w-[220px] rounded-md bg-white p-1 shadow-lg shadow-black/30 animate-in fade-in-0 zoom-in-95"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1">
                  Save Page As… <div className="ml-auto pl-5">⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="m-1 h-px bg-violet-6" />
                <DropdownMenu.Item className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="m-1 h-px bg-violet-6" />

          <DropdownMenu.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
            className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1"
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className="ml-auto pl-5 text-mauve-11">⌘+B</div>
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
            className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1"
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="m-1 h-px bg-violet-6" />

          <DropdownMenu.Label className="pl-6 text-xs leading-6 text-mauve-11">
            People
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              value="pedro"
              className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              value="colm"
              className="relative flex h-6 select-none items-center rounded-sm pl-6 pr-2 text-sm text-violet-11 outline-none data-[highlighted]:bg-violet-9 data-[highlighted]:text-violet-1"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Test;
