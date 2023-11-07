import TabHandler from './Slices/tabHandler';
import allAds from './Slices/allAds';
import checkBox from './Slices/checkBox';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore(
  {
  reducer: {TabHandler,allAds,checkBox},
  }
  )