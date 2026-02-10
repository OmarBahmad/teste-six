import { supabase } from './supabase';

export async function getModules() {
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .order('id', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('id', { ascending: true });
  
  if (error) throw error;
  return data;
}

export async function getMetrics() {
  const { data, error } = await supabase
    .from('metrics')
    .select('*')
    .single();
  
  if (error) throw error;
  return data;
}

export async function getCheckoutData() {
  const { data, error } = await supabase
    .from('checkout')
    .select('*')
    .single();
  
  if (error) throw error;
  return data;
}
