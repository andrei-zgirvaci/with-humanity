import { Popover, Transition } from '@headlessui/react';
import {
  DocumentSearchIcon,
  ExclamationCircleIcon,
  HomeIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid';

import { MarkerObject } from 'lib/markers';

import EvacuatePopover from './popovers/Evacuate';
import IsMissingPopover from './popovers/IsMissing';
import ShelterPopover from './popovers/Shelter';

interface Props extends MarkerObject {
  key: string;
  lat: number;
  lng: number;
  $hover?: boolean;
}

export default function Marker({ $hover, type, description }: Props) {
  let twColor = 'text-slate-500';
  let Icon = LocationMarkerIcon;
  let PopoverComponent = null;

  switch (type) {
    case 'shelter':
      twColor = 'text-green-500';
      Icon = HomeIcon;
      PopoverComponent = ShelterPopover;
      break;
    case 'evacuate':
      twColor = 'text-red-500';
      Icon = ExclamationCircleIcon;
      PopoverComponent = EvacuatePopover;
      break;
    case 'isMissing':
      twColor = 'text-orange-500';
      Icon = DocumentSearchIcon;
      PopoverComponent = IsMissingPopover;
      break;
  }

  return (
    <Popover>
      <Icon className={`h-5 w-5 ${twColor}`} />

      <Transition
        className="absolute z-10 mt-1"
        show={$hover}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel>
          <div className="w-72 h-72 border-slate-100 border rounded-md drop-shadow-2xl bg-white p-2">
            <PopoverComponent description={description} />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
