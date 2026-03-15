// types.ts

export interface Event {
  id: string;
  timestamp: number;
  type: string;
  data: {
    [key: string]: any;
  };
}

export interface Metric {
  id: string;
  name: string;
  value: number;
}

export interface AnalyticsEvent {
  event: Event;
  metrics: Metric[];
}

export enum EventType {
  PAGE_VIEW = 'page_view',
  CLICK = 'click',
  CONVERSION = 'conversion',
}

export interface PageViewEvent extends Event {
  type: EventType.PAGE_VIEW;
  data: {
    page: {
      path: string;
      title: string;
    };
  };
}

export interface ClickEvent extends Event {
  type: EventType.CLICK;
  data: {
    element: {
      id: string;
      text: string;
    };
  };
}

export interface ConversionEvent extends Event {
  type: EventType.CONVERSION;
  data: {
    revenue: number;
    currency: string;
  };
}