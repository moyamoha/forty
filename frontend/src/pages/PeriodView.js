import React from 'react';
import { useSelector } from 'react-redux';

import ToggleView from '../components/ToggleView';
import { NAKYMA } from '../utils';
import PeriodTable from '../components/PeriodTable';
import CalendarView from '../components/CalendarView';
import Layout from '../components/Layout';

export default function PeriodView() {
  const period = useSelector((s) => s.data.selectedPeriod);
  const view = useSelector((s) => s.ui.periodView);

  return (
    <Layout>
      <div className="period-view">
        <div className="period-view-content">
          {view === NAKYMA.TABLE ? (
            <PeriodTable period={period}></PeriodTable>
          ) : (
            <CalendarView period={period}></CalendarView>
          )}
          <ToggleView></ToggleView>
        </div>
      </div>
    </Layout>
  );
}
