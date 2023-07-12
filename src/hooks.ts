import React, { useState, useEffect } from "react";
import { idState } from "atoms";
import { useRecoilValue } from "recoil";


export function useId() {
    return useRecoilValue(idState)
}