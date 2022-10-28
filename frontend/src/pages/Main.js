import React from 'react';
import { useSelector } from 'react-redux';
import HabitModal from '../components/HabitModal';
import Layout from '../components/Layout';
import PeriodModal from '../components/PeriodModal';
import PeriodsList from '../components/PeriodsList';
import useSetTitle from '../useSetTitle';

export default function Main() {
  useSetTitle('home');
  const showPeriodForm = useSelector((s) => s.ui.showPeriodForm);
  const showHabitModal = useSelector((s) => s.ui.showHabitModal);
  return (
    <Layout>
      <PeriodsList></PeriodsList>
      {showPeriodForm ? <PeriodModal></PeriodModal> : <></>}
      {showHabitModal ? <HabitModal></HabitModal> : <></>}
    </Layout>
  );
}
